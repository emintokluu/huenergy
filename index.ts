// project modules
import { getLights } from './HueAPI/Controllers/lights'

getLights('Hue Play 1').then(res => console.dir(res));
