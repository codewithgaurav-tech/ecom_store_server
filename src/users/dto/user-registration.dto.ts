export class UserDTO {
    firstName: string;
    lastName: string;
    country: string;
    language: string;
    birthDate: Date | null;
    phoneNo: number;
    userName: string;
    email: string;
    password: string;
  
    constructor(
      firstName: string,
      lastName: string,
      country: string,
      language: string,
      birthDate: Date | null,
      phoneNo: number,
      userName: string,
      email: string,
      password: string
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.country = country;
      this.language = language;
      this.birthDate = birthDate;
      this.phoneNo = phoneNo;
      this.userName = userName;
      this.email = email;
      this.password = password;
    }
  }
  