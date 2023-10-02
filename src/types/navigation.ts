export interface Item {
    name: string;
    href?: string;
    intro?: string;
    content?: string;
    cta?: string;
    subDetail?: BusinessDesc;
}

export interface IBusinesses extends Item{
    subItem?: Item[];
}

export interface BusinessDesc {
    topHead: string;
    topDesc: string;
    secondHead?: string;
    secondDesc?: string;
    thirdHead?: string;
    thirdDesc?: string;
    summary1?: string;
    summary2?: string;
    image: string;
    imageAlt: string;
  }