import prem from 'polished/lib/helpers/rem';

type t = () => (val: number) => string;
export const getRem: t = () => (val: number) => prem(val);
