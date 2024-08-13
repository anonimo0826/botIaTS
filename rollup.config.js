import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';

export default {
    input: 'src/app.ts',
    output: {
        file: 'dist/app.js',
        format: 'esm',
    },
    onwarn: (warning) => {
        if (warning.code === 'UNRESOLVED_IMPORT') return;
    },
    plugins: [
        replace({
            'process.env.OPENAI_API_KEY': JSON.stringify(process.env.OPENAI_API_KEY),
            'process.env.JWT_TOKEN': JSON.stringify(process.env.JWT_TOKEN),
            'process.env.NUMBER_ID': JSON.stringify(process.env.NUMBER_ID),
            preventAssignment: true,
        }),
        typescript(),
    ],
};


// import typescript from 'rollup-plugin-typescript2'

// export default {
//     input: 'src/app.ts',
//     output: {
//         file: 'dist/app.js',
//         format: 'esm',
//     },
//     onwarn: (warning) => {
//         if (warning.code === 'UNRESOLVED_IMPORT') return
//     },
//     plugins: [typescript()],
// }
