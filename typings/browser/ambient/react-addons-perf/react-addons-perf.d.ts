// Compiled using typings@0.6.6
// Source: https://raw.githubusercontent.com/joemcelroy/DefinitelyTyped/8cd79728efa7652d934b2703feeb68bb4802aebb/react/react-addons-perf.d.ts
// Type definitions for React v0.14 (react-addons-perf)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare namespace __React {
    interface ComponentPerfContext {
        current: string;
        owner: string;
    }

    interface NumericPerfContext {
        [key: string]: number;
    }

    interface Measurements {
        exclusive: NumericPerfContext;
        inclusive: NumericPerfContext;
        render: NumericPerfContext;
        counts: NumericPerfContext;
        writes: NumericPerfContext;
        displayNames: {
            [key: string]: ComponentPerfContext;
        };
        totalTime: number;
    }

    namespace __Addons {
        namespace Perf {
            export function start(): void;
            export function stop(): void;
            export function printInclusive(measurements: Measurements[]): void;
            export function printExclusive(measurements: Measurements[]): void;
            export function printWasted(measurements: Measurements[]): void;
            export function printDOM(measurements: Measurements[]): void;
            export function getLastMeasurements(): Measurements[];
        }
    }
}

declare module "react-addons-perf" {
    import Perf = __React.__Addons.Perf;
    export = Perf;
}