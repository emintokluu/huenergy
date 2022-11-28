export interface IGroups {
    name: string;
    lights: string[];
    type: string;
    action: {
        on: boolean;
        bri: number;
        hue: number;
        sat: number;
        effect: string;
        xy: string[];
        ct: number;
        alert: string;
        colormode: string;
    }
}