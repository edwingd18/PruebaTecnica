package com.example.clients;

import com.example.clients.model.Client;
import com.example.clients.repository.ClientRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.List;

@SpringBootApplication
public class ClientsApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClientsApplication.class, args);
    }

    @Bean
    public CommandLineRunner initData(ClientRepository clientRepository) {
        return args -> {
            if (clientRepository.count() == 0) {
                clientRepository.saveAll(List.of(
                        new Client("Edwin Guerrero", "123456789", "edwin@email.com", LocalDate.now()),
                        new Client("Jairo ", "1233121", "jairo@email.com", LocalDate.now()),
                        new Client("Edwin Guerrero", "123456789", "edwin@email.com", LocalDate.now()),
                        new Client("Maria López", "987654321", "maria@email.com", LocalDate.now()),
                        new Client("Carlos Pérez", "111222333", "carlos@email.com", LocalDate.now())
                ));
                System.out.println(" Clientes de prueba creados.");
            }
        };
    }
}
