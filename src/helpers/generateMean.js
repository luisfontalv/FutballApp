export const generateMean = (data) => {
    let mean = data.rit + data.tir + data.pas + data.reg + data.def + data.fis;
    mean = mean / 6;
    mean = parseInt(mean);

    return mean
}