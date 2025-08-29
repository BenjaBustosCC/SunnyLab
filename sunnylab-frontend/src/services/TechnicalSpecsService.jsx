import { API_URL } from "../../config";

export async function getEquipment() {
  const response = await fetch(`${API_URL}/equipments?populate=*`);
  if (!response.ok) {
    throw new Error('Algo ha salido mal');
  }
  const { data } = await response.json();
  return data;
}

export async function getEquipmentCategory() {
  const response = await fetch(`${API_URL}/equipment-categories?fields[0]=Nombre&fields[1]=Slug`);
  if (!response.ok) {
    throw new Error('Algo ha salido mal');
  }
  const { data } = await response.json();
  return data;
}