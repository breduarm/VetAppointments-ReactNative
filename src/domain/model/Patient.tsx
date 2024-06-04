class Patient {
  id: string;
  name: string;
  owner: string;
  email: string;
  phone: string;
  dateApp: Date;
  symptoms: string;

  constructor(
    name: string,
    owner: string,
    email: string,
    phone: string,
    dateApp: Date,
    symptoms: string,
  ) {
    this.name = name;
    this.owner = owner;
    this.email = email;
    this.phone = phone;
    this.dateApp = dateApp;
    this.symptoms = symptoms;
  }
}

export default Patient;
