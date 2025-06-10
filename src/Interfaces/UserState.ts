interface UserData {
  users: User[];
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  email: string;
  company: Company;
}

interface Company {
  title: string;
}
