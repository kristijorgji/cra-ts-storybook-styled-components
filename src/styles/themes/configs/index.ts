import { getRem } from '../utils/utils';

import Space from './Space';

const rem = getRem();
const spacing = (val: keyof typeof Space): string => rem(Space[val]);

export default {
    utils: { rem, spacing },
    Space,
};
