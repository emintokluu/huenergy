export interface ILights {
    state: {
        on: boolean;
        bri: number;
        hue: number;
        sat: number;
        effect: string;
        xy: string[];
        ct: number;
        alert: string;
        colormode: string;
        mode: string;
        reachable: boolean;
    };
    swupdate: {
        state: string;
        lastinstall: string;
    };
    type: string;
    name: string;
    modelid: string;
    manufacturername: string;
    productname: string;
    capabilities: {
        certified: boolean;
        control: {
            mindimlevel: number;
            colorgamuttype: string;
            colorgamut: string[][];
            ct: {
                min: number;
                max: number;
            };
        };
        streaming: {
            renderer: boolean;
            proxy: boolean;
        }
    };
    config: {
        archetype: string;
        function: string;
        direction: string;
        startup: {
            mode: string;
            configured: boolean;
        };
    };
    uniqueid: string;
    swversion: string;
    swconfigid: string;
    productid: string;
}