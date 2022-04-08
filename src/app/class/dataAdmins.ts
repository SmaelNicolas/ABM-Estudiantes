import { Admin } from './admin';

export class DataAdmins {
  public static adminList: Admin[] = [];

  //   <<<<<<<<Serivices>>>>>>>

  public static getAdminList(): Admin[] {
    return this.adminList;
  }
  public static deleteAdmin(id: number) {
    this.adminList = this.adminList.filter((admin) => admin.id !== id);
  }
  public static addAdmin(admin: Admin) {
    this.adminList.push(admin);
  }

  public static getAdmin(id: number): Admin | undefined {
    return this.adminList.find((admin) => admin.id === id);
  }
}
