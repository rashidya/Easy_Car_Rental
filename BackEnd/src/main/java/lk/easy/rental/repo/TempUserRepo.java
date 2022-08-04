package lk.easy.rental.repo;

import lk.easy.rental.entity.TempUser;
import lk.easy.rental.entity.User;
import lk.easy.rental.enums.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TempUserRepo extends JpaRepository<TempUser,Integer> {

}
