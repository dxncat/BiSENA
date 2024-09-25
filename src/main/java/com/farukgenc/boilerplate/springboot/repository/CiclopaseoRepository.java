package com.farukgenc.boilerplate.springboot.repository;

import com.farukgenc.boilerplate.springboot.model.Ciclopaseo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.authentication.jaas.JaasPasswordCallbackHandler;
import org.springframework.stereotype.Repository;

@Repository
public interface CiclopaseoRepository extends JpaRepository<Ciclopaseo, Long> {
}
