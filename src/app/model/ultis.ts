import { LOGO, URL_LOGO } from "./constants";

export default class Utils {
  static getLogo(nameLogo?: string): string {
    let url = ''
    switch (nameLogo) {
      case LOGO.CLOUD_ACADEMY:
      url = URL_LOGO.CLOUD_ACADEMY;
      break;
      case LOGO.COURSERA:
      url = URL_LOGO.COURSERA;
      break;
      case LOGO.KHAN_ACADEMY:
      url = URL_LOGO.KHAN_ACADEMY;
      break;
      case LOGO.UDEMY:
      url = URL_LOGO.UDEMY;
      break;
    }
    return url;
  }

  static courseOfUser(listId: string[]): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return listId.indexOf(user.uid) !== -1 ? true : false ;
  }
}
