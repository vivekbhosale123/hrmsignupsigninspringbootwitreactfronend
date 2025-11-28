package com.vdb.controller;


import com.vdb.entity.Employee;
import com.vdb.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/employees")
@Slf4j
@RequiredArgsConstructor
public class EmployeeController {

    private final EmployeeService employeeService;

    @PostMapping("/signUp")
    public ResponseEntity<Employee> signUp(@RequestBody Employee employee)
    {
        log.info("@@@@@trying to signup for employee {}", employee.getEmpName());
        return ResponseEntity.ok(employeeService.signUp(employee));
    }

    @GetMapping("/signin/{empEmailId}/{empPassword}")
    public ResponseEntity<Boolean> signIn(@PathVariable String empEmailId,@PathVariable String empPassword)
    {
        return ResponseEntity.ok(employeeService.signIn(empEmailId, empPassword));
    }

}
