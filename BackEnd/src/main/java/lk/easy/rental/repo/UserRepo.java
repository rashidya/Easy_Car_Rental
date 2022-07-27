package lk.easy.rental.repo;

import lk.easy.rental.entity.User;
import lk.easy.rental.enums.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
    boolean existsByUserName(String username);

    User findByUserName(String username);

    int countByRole(Role Role);
}
