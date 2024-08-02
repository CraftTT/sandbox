// function sumIntervals(intervals) {
//     if (intervals.length === 0) return 0;
//
//     // Сортируем интервалы по их начальным точкам
//     intervals.sort((a, b) => a[0] - b[0]);
//
//     let totalLength = 0;
//     let [currentStart, currentEnd] = intervals[0];
//
//     for (const [start, end] of intervals) {
//         if (start <= currentEnd) {
//             // Объединяем интервалы
//             currentEnd = Math.max(currentEnd, end);
//         } else {
//             // Добавляем длину текущего интервала и переходим к следующему
//             totalLength += currentEnd - currentStart;
//             [currentStart, currentEnd] = [start, end];
//         }
//     }
//
//     // Добавляем длину последнего интервала
//     totalLength += currentEnd - currentStart;
//
//     return totalLength;
// }
//
// // Примеры использования:
// console.log(sumIntervals([[1, 2], [6, 10], [11, 15]])); // 9
// console.log(sumIntervals([[1, 4], [7, 10], [3, 5]])); // 7
// console.log(sumIntervals([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]])); // 19
// console.log(sumIntervals([[0, 20], [-100000000, 10], [30, 40]])); // 100000030


//SOLUTION:

function sumIntervals(intervals) {
    if (intervals.length === 0) return 0;

    intervals.sort((a, b) => a[0] - b[0]);

    let totalLength = 0;
    let [currentStart, currentEnd] = intervals[0];

    for (const [start, end] of intervals) {
        if (start <= currentEnd) {

            currentEnd = Math.max(currentEnd, end);
        } else {
            totalLength += currentEnd - currentStart;
            [currentStart, currentEnd] = [start, end];
        }
    }

    totalLength += currentEnd - currentStart;

    return totalLength;
}

console.log(sumIntervals([[1, 2], [6, 10], [11, 15]]));
console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]));
console.log(sumIntervals([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]]));
console.log(sumIntervals([[0, 20], [-100000000, 10], [30, 40]]));
