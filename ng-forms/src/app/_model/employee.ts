export class Employee {
   constructor (
    public $key: string,
    public fullName: string,
    public mobile: number,
    public email: string,
    public city: string,
    public departmentiId: number,
    public hireDate: string,
    public gender: string,
    public isPermanent: boolean
   ) {

   }
}
