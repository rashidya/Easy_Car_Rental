import {Component} from "react";
import {Grid} from "@mui/joy";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import * as React from "react";

import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import VehicleTable from '../VehicleTable'
import {Autocomplete, Button} from "@mui/material";
import UploadButton from "../UploadButton";
import VehicleService from "../../services/VehicleService";
import GDSESnackBar from "../common/snackBar";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {TableCell} from "@material-ui/core";
import TableBody from "@mui/material/TableBody";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import MyButton from "../common/Button";

class ManageVehicle extends Component{

    constructor(props) {
        super(props);

        this.state = {

            frontImage: null,
            backImage: null,
            sideImage: null,
            interiorImage: null,

            frontView: null,
            backView: null,
            sideView: null,
            interiorView: null,

            formData: {
                vehicleId: '',
                registrationNo: '',
                color: '',
                brand: '',
                noOfPassengers: '',
                fuelType: '',
                vehicleType: '',
                transmissionType: '',
                pricePerExtraKM: '',
                vehicleAvailability: '',
                refundableDamageFee: '',
                mileage: '',
                lastServiceMileage: '',
                priceRate: {
                    dailyRate: '',
                    monthlyRate: '',
                },
                freeMileage: {
                    dailyFreeMileage: '',
                    monthlyFreeMileage: '',
                }


            },
            fuel: [
                {
                    type: 'PETROL'
                },
                {
                    type: 'DIESEL'
                }
            ],
            transmission: [
                {
                    type: 'AUTO'
                },
                {
                    type: 'MANUAL'
                }
            ]
            ,
            vehicleCategory: [
                {
                    type: 'GENERAL'
                },
                {
                    type: 'PREMIUM'
                },
                {
                    type: 'LUXURY'
                }
            ]
            ,
            availability: [
                {
                    type: 'AVAILABLE'
                },
                {
                    type: 'NOT_AVAILABLE'
                }
            ]
            ,
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'Add',
            btnColor: 'success'

        }
    }


    addCarImage=async (vehicleId) =>{

        var bodyFormData = new FormData();
        bodyFormData.append('param', this.state.frontImage);
        bodyFormData.append('param', this.state.backImage);
        bodyFormData.append('param', this.state.sideImage);
        bodyFormData.append('param', this.state.interiorImage);

        let res = await VehicleService.addCarImage(bodyFormData,vehicleId);
        if (res.data.code===200){alert(res.data.message)}else {
            alert(res.data.message);
        }
    }


    updateCarImage=async (data,vehicleId,view) =>{
        let response =await VehicleService.updateCarImage(data,vehicleId,view);
        if (response.status!==200){
            alert("Car Image Update Fail")
        }
    }

    submitVehicle = async () => {
        let formData = this.state.formData;

        console.log(formData)


        if (this.state.btnLabel === "Add") {
            let res = await VehicleService.postVehicle(formData);
            this.addCarImage(formData.vehicleId)

            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                await this.loadData();

            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }


        if (this.state.btnLabel === "Update") {
            let res = await VehicleService.putVehicle(formData);
            if (res.status === 200) {

                let front=this.state.frontImage;
                let back=this.state.backImage;
                let side=this.state.sideImage;
                let interior=this.state.interiorImage;
                let list=[front,back,side,interior]
                let viewList=["Front","Back","Side","Interior"]
                for (var i=0; i<list.length; i++){
                    if (list[i] != null){
                        let formData = new FormData();
                        formData.append('carImage',list[i]);
                        await this.updateCarImage(formData, formData.vehicleId, viewList[i]);
                    }
                }

                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                //this.clearFields();
                await this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }

        };

    loadData = async () => {
        let res = await VehicleService.fetchVehicle();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    updateVehicle = (data) => {
        console.log(data)

        this.setState({
            btnLabel: 'Update',
            btnColor: 'primary',
            formData: {
                vehicleId: data.vehicleId,
                registrationNo: data.registrationNo,
                color: data.color,
                brand: data.brand,
                noOfPassengers: data.noOfPassengers,
                fuelType: data.fuelType,
                vehicleType: data.vehicleType,
                transmissionType: data.transmissionType,
                pricePerExtraKM: data.pricePerExtraKM,
                vehicleAvailability: data.vehicleAvailability,
                refundableDamageFee: data.refundableDamageFee,
                mileage: data.mileage,
                lastServiceMileage: data.lastServiceMileage,
                priceRate: {
                    dailyRate: data.priceRate.dailyRate,
                    monthlyRate: data.priceRate.monthlyRate,
                },
                freeMileage: {
                    dailyFreeMileage: data.freeMileage.dailyFreeMileage,
                    monthlyFreeMileage: data.freeMileage.monthlyFreeMileage,
                }


            }

        });
    };


    deleteVehicle = async (id) => {
        let params = {
            id: id
        }
        let res = await VehicleService.deleteVehicle(params);
        console.log(res)

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            await this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };

    componentDidMount() {
        this.loadData();
    }








    render() {
        return(
            <>

            <Grid display={"flex"} width={'81vw'}  justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>

                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitVehicle}>

                    <Grid display={"flex"} height={'75vh'} marginTop={'5vh'} marginBottom={'8vh'}>
                        <Grid width={'60%'} display={"flex"} flexWrap={'wrap'} justifyContent={"space-evenly"}>

                            <TextField
                                required
                                size={'small'}
                                id="outlined-required"
                                label="vehicleId"
                                sx={{width: '35ch' }}
                                value={this.state.formData.vehicleId}
                                onChange={(e) => {
                                    let formDataOb =this.state.formData
                                    formDataOb.vehicleId = e.target.value
                                    this.setState(formDataOb)
                                }}
                                validators={['required']}
                            />

                            <TextField
                                required
                                size={'small'}
                                id="outlined-required"
                                label="Registration number"
                                sx={{width: '35ch' }}
                                value={this.state.formData.registrationNo}
                                onChange={(e) => {
                                    let formDataOb =this.state.formData
                                    formDataOb.registrationNo = e.target.value
                                    this.setState(formDataOb)
                                }}
                                validators={['required']}
                            />

                            <TextField
                                size={'small'}
                                required
                                id="outlined-required"
                                label="Brand "
                                sx={{ width: '35ch' }}
                                value={this.state.formData.brand}
                                onChange={(e) => {
                                    let formDataOb =this.state.formData
                                    formDataOb.brand = e.target.value
                                    this.setState(formDataOb)
                                }}
                                validators={['required']}
                            />

                            <TextField
                                required
                                size={'small'}
                                id="outlined-required"
                                label="Color"
                                sx={{ width: '35ch' }}
                                value={this.state.formData.color}
                                onChange={(e) => {
                                    let formDataOb =this.state.formData
                                    formDataOb.color = e.target.value
                                    this.setState(formDataOb)
                                }}
                                validators={['required']}
                            />

                            <TextField
                                required
                                size={'small'}
                                id="outlined-required"
                                label="No Of Passengers"
                                sx={{width: '35ch' }}
                                value={this.state.formData.noOfPassengers}
                                onChange={(e) => {
                                    let formDataOb =this.state.formData
                                    formDataOb.noOfPassengers = e.target.value
                                    this.setState(formDataOb)
                                }}
                                validators={['required']}
                            />

                            <TextField
                                size={'small'}
                                required
                                id="outlined-required"
                                label="Mileage"
                                sx={{width: '35ch' }}
                                value={this.state.formData.mileage}
                                onChange={(e) => {
                                    let formDataOb =this.state.formData
                                    formDataOb.mileage = e.target.value
                                    this.setState(formDataOb)
                                }}
                                validators={['required']}
                            />

                            <TextField
                                size={'small'}
                                required
                                id="outlined-required"
                                label="Last Service Mileage"
                                sx={{width: '35ch' }}
                                value={this.state.formData.lastServiceMileage}
                                onChange={(e) => {
                                    let formDataOb =this.state.formData
                                    formDataOb.lastServiceMileage = e.target.value
                                    this.setState(formDataOb)
                                }}
                                validators={['required']}
                            />

                            <TextField
                                size={'small'}
                                required
                                id="outlined-required"
                                label="Price Per Extra KM "
                                sx={{width: '35ch' }}
                                value={this.state.formData.pricePerExtraKM}
                                onChange={(e) => {
                                    let formDataOb =this.state.formData
                                    formDataOb.pricePerExtraKM = e.target.value
                                    this.setState(formDataOb)
                                }}
                                validators={['required']}
                            />

                            <TextField
                                size={'small'}
                                required
                                id="outlined-required"
                                label="Damage Fee "
                                sx={{ width: '35ch' }}
                                value={this.state.formData.refundableDamageFee}
                                onChange={(e) => {
                                    let formDataOb =this.state.formData
                                    formDataOb.refundableDamageFee = e.target.value
                                    this.setState(formDataOb)
                                }}
                                validators={['required']}
                            />


                            <TextField
                                size={'small'}
                                required
                                id="outlined-required"
                                label="Daily Price"
                                sx={{ width: '35ch' }}
                                value={this.state.formData.priceRate.dailyRate}
                                onChange={(e) => {
                                    let formDataOb =this.state.formData
                                    formDataOb.priceRate.dailyRate = e.target.value
                                    this.setState(formDataOb)
                                }}
                                validators={['required']}
                            />
                            <TextField
                                size={'small'}
                                required
                                id="outlined-required"
                                label="Monthly Price"
                                defaultValue=""
                                sx={{width: '35ch' }}
                                value={this.state.formData.priceRate.monthlyRate}
                                onChange={(e) => {
                                    let formDataOb =this.state.formData
                                    formDataOb.priceRate.monthlyRate = e.target.value
                                    this.setState(formDataOb)
                                }}
                                validators={['required']}
                            />
                            <TextField
                                size={'small'}
                                required
                                id="outlined-required"
                                label="Daily Free Milage "
                                sx={{ width: '35ch' }}
                                value={this.state.formData.freeMileage.dailyFreeMileage}
                                onChange={(e) => {
                                    let formDataOb =this.state.formData
                                    formDataOb.freeMileage.dailyFreeMileage = e.target.value
                                    this.setState(formDataOb)
                                }}
                                validators={['required']}
                            />
                            <TextField
                                size={'small'}
                                required
                                id="outlined-required"
                                label="Monthly Free Milage "
                                sx={{width: '35ch' }}
                                value={this.state.formData.freeMileage.monthlyFreeMileage}
                                onChange={(e) => {
                                    let formDataOb =this.state.formData
                                    formDataOb.freeMileage.monthlyFreeMileage = e.target.value
                                    this.setState(formDataOb)
                                }}
                                validators={['required']}
                            />


                            <Autocomplete

                                onChange={(e, value, r) => {

                                    let formData = this.state.formData

                                    formData.vehicleType = value.type


                                    this.setState({ formData })

                                }}
                                getOptionLabel={
                                    (option) => option.type
                                }
                                id="controllable-states"
                                options={this.state.vehicleCategory}
                                sx={{width: '35ch' }}
                                renderInput={(params) => <TextField {...params} label="Vehicle Type"  size={'small'} />}
                            />


                            <Autocomplete

                                onChange={(e, value, r) => {

                                    let formData = this.state.formData

                                    formData.transmissionType = value.type

                                    this.setState({ formData })

                                }}
                                getOptionLabel={
                                    (option) => option.type
                                }
                                //value={this.state.formData.transmissionType}
                                id="controllable-demo"
                                options={this.state.transmission}
                                sx={{width: '35ch' }}
                                renderInput={(params) => <TextField {...params} label="Transmission Type"  size={'small'} />}
                            />

                            <Autocomplete

                                onChange={(e, value, r) => {

                                    let formData = this.state.formData

                                    formData.fuelType = value.type

                                    this.setState({ formData })

                                }}
                                getOptionLabel={
                                    (option) => option.type
                                }
                                id="controllable"
                                options={this.state.fuel}
                                sx={{width: '35ch' }}
                                renderInput={(params) => <TextField {...params} label="Fuel Type"  size={'small'}/>}
                            />


                            <Autocomplete

                                onChange={(e, value, r) => {

                                    let formData = this.state.formData

                                    formData.vehicleAvailability = value.type

                                    this.setState({ formData })

                                }}
                                getOptionLabel={
                                    (option) => option.type
                                }
                                id="controllable"
                                options={this.state.availability}
                                sx={{width: '35ch' }}
                                renderInput={(params) => <TextField {...params} label="Availability"  size={'small'}/>}
                            />



                        </Grid>

                        <Grid width={'36%'}>

                            <Grid height={'80%'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-evenly'}>
                                <Grid width={'48%'} height={'48%'} border={'1px solid black'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} style={{
                                    backgroundImage:"url(" +this.state.frontView+ ")",
                                    backgroundSize: 'cover'
                                }}>

                                    <div><input

                                        style={{display: 'none'}}
                                        accept="image/*"
                                        //className={classes.input}
                                        id="contained-button-file01"
                                        multiple
                                        type="file"
                                        onChange={(e) => {
                                            this.setState({
                                                frontImage: e.target.files[0],
                                                frontView : URL.createObjectURL(e.target.files[0])
                                            })
                                        }}
                                    />
                                        <label htmlFor="contained-button-file01">
                                            <Button variant="outlined" color="primary" size="small" component="span">
                                               <UploadButton/> Front View
                                            </Button>
                                        </label>

                                    </div>

                                </Grid>

                                <Grid width={'48%'} height={'48%'} border={'1px solid black'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}

                                      style={{
                                          backgroundImage:"url(" +this.state.backView+ ")",
                                          backgroundSize: 'cover'
                                      }}
                                >

                                    <div><input

                                        style={{display: 'none'}}
                                        accept="image/*"
                                        //className={classes.input}
                                        id="contained-button-file02"
                                        multiple
                                        type="file"
                                        onChange={(e) => {
                                            this.setState({
                                                backImage: e.target.files[0],
                                                backView : URL.createObjectURL(e.target.files[0])
                                            })
                                        }}
                                    />
                                        <label htmlFor="contained-button-file02">
                                            <Button variant="outlined" color="primary" size="small" component="span">
                                                <UploadButton/> Back View
                                            </Button>
                                        </label>

                                    </div>
                                </Grid>

                                <Grid width={'48%'} height={'48%'} border={'1px solid black'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}
                                      style={{
                                          backgroundImage:"url(" +this.state.sideView+ ")",
                                          backgroundSize: 'cover'
                                      }}>

                                    <div><input

                                        style={{display: 'none'}}
                                        accept="image/*"
                                        //className={classes.input}
                                        id="contained-button-file03"
                                        multiple
                                        type="file"
                                        onChange={(e) => {
                                            this.setState({
                                                sideImage: e.target.files[0],
                                                sideView : URL.createObjectURL(e.target.files[0])
                                            })
                                        }}
                                    />
                                        <label htmlFor="contained-button-file03">
                                            <Button variant="outlined" color="primary" size="small" component="span">
                                                <UploadButton/> Side View
                                            </Button>
                                        </label>

                                    </div>
                                </Grid>

                                <Grid width={'48%'} height={'48%'} border={'1px solid black'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}
                                      style={{
                                          backgroundImage:"url(" +this.state.interiorView+ ")",
                                          backgroundSize: 'cover'
                                      }}>

                                    <div><input

                                        style={{display: 'none'}}
                                        accept="image/*"
                                        //className={classes.input}
                                        id="contained-button-file04"
                                        multiple
                                        type="file"
                                        onChange={(e) => {
                                            this.setState({
                                                interiorImage: e.target.files[0],
                                                interiorView : URL.createObjectURL(e.target.files[0])
                                            })
                                        }}
                                    />
                                        <label htmlFor="contained-button-file04">
                                            <Button variant="outlined" color="primary" size="small" component="span">
                                                <UploadButton/> Interior View
                                            </Button>
                                        </label>

                                    </div>
                                </Grid>

                            </Grid>

                           <Grid height={'10%'} display={'flex'} justifyContent={'flex-end'}>

                               <Button variant="contained" sx={{m:0.5,mt:4,width:'12ch',height:'5ch'}}
                                       style={{color: "white", backgroundColor: '#c4c4c4'}} type={'submit'}>
                                   Cancel
                               </Button>

                                   <MyButton
                                           style={{color: "white"}} variant="contained"
                                           label={this.state.btnLabel}
                                           type="submit"
                                           color={this.state.btnColor}
                                           size='small'
                                   />






                           </Grid>
                        </Grid>
                    </Grid>

                </ValidatorForm>



                <Grid>
                    <TableContainer component={Paper} style={{ height: '45vh', width: '81vw', backgroundColor: '#eeeff1' }}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Vehicle Id</TableCell>
                                    <TableCell align="left">Registration No</TableCell>
                                    <TableCell align="left">Color</TableCell>
                                    <TableCell align="left">Brand</TableCell>
                                    <TableCell align="left">Number Of Passengers</TableCell>
                                    <TableCell align="left">Fuel Type</TableCell>
                                    <TableCell align="left">Vehicle Type</TableCell>
                                    <TableCell align="left">Transmission Type</TableCell>
                                    <TableCell align="left">Price Per Extra KM</TableCell>
                                    <TableCell align="left">Vehicle Availability</TableCell>
                                    <TableCell align="left">Refundable Damage Fee</TableCell>
                                    <TableCell align="left">Mileage</TableCell>
                                    <TableCell align="left">Last Service Mileage</TableCell>
                                    <TableCell align="left">Daily Price Rate</TableCell>
                                    <TableCell align="left">Monthly Price Rate</TableCell>
                                    <TableCell align="left">Daily Free Mileage</TableCell>
                                    <TableCell align="left">Monthly Free Mileage</TableCell>

                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.vehicleId}</TableCell>
                                            <TableCell align="left">{row.registrationNo}</TableCell>
                                            <TableCell align="left">{row.color}</TableCell>
                                            <TableCell align="left">{row.brand}</TableCell>
                                            <TableCell align="left">{row.noOfPassengers}</TableCell>
                                            <TableCell align="left">{row.color}</TableCell>
                                            <TableCell align="left">{row.vehicleType}</TableCell>
                                            <TableCell align="left">{row.transmissionType}</TableCell>
                                            <TableCell align="left">{row.pricePerExtraKM}</TableCell>
                                            <TableCell align="left">{row.vehicleAvailability}</TableCell>
                                            <TableCell align="left">{row.refundableDamageFee}</TableCell>
                                            <TableCell align="left">{row.mileage}</TableCell>
                                            <TableCell align="left">{row.lastServiceMileage}</TableCell>
                                            <TableCell align="left">{row.priceRate.dailyRate}</TableCell>
                                            <TableCell align="left">{row.priceRate.monthlyRate}</TableCell>
                                            <TableCell align="left">{row.freeMileage.dailyFreeMileage}</TableCell>
                                            <TableCell align="left">{row.freeMileage.monthlyFreeMileage}</TableCell>





                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.updateVehicle(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteVehicle(row.vehicleId)
                                                        }}
                                                    >
                                                        <DeleteIcon color="error" />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Grid>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ alert: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </>
        )
    }

}

export default ManageVehicle