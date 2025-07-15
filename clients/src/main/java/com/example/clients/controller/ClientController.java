package com.example.clients.controller;

import com.example.clients.model.Client;
import com.example.clients.repository.ClientRepository;
import org.springframework.http.ResponseEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/clients")
@CrossOrigin(origins = "*")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @GetMapping
    public List<Client> listar() {
        return clientRepository.findAll();
    }

    @PostMapping
    public Client crear(@RequestBody Client client) {
        client.setFechaRegistro(LocalDate.now());
        return clientRepository.save(client);
    }
     @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable Long id) {
        if (!clientRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        clientRepository.deleteById(id);
        return ResponseEntity.noContent().build(); // 204 No Content
    }
}
