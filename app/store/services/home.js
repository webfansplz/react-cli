import axios from 'axios';

export async function reqfn(data) {
  let res = await axios.get('xxx');
  return res.m_pic;
}
