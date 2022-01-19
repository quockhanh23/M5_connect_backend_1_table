import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {PersonService} from "../../services/person.service";
import {ActivatedRoute, Router} from "@angular/router";

const url = "/"

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {
  personForm: FormGroup = this.fb.group({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl(),
  });

  constructor(private personService: PersonService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {

  }

  submit() {
    const person = this.personForm.value
    console.log(person)
    // @ts-ignore
    this.personService.save(person).subscribe((r) => {
      console.log(r)
      this.router.navigateByUrl(url)
      this.notify1()
      this.notify2()
    })
  }

  notify1() {
    setTimeout(() => {
      // @ts-ignore
      document.getElementById("alo").innerHTML = "Create successful!"
    }, 0)
  }

  notify2() {
    setTimeout(() => {
      // @ts-ignore
      document.getElementById("alo").innerHTML = " "
    }, 2000)
  }
}
