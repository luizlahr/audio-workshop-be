export interface CreateContactDTO {
  type: string;
  name: string;
  nickname?: string;
  email?: string;
  mobile?: string;
  phone?: string;
  nid?: string;
  ssn?: string;
  address_street?: string;
  address_number?: string;
  address_extra?: string;
  district?: string;
  city?: string;
  zipcode?: string;
}
