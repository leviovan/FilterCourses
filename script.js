
let courses = [
    { name: "Courses in England", prices: [null, 100] },
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] },////////////
    { name: "Courses in Russia", prices: [null, 400] },/////////////
    { name: "Courses in China", prices: [50, 250] },///////////
    { name: "Courses in USA", prices: [200, null] },////////////
    { name: "Courses in Kazakhstan", prices: [56, 324] },//////////////
    { name: "Courses in France", prices: [null, null] },///////////////
];

let requiredRange1 = [null, 200];
let requiredRange2 = [50, 300];
let requiredRange3 = [200, null];

const PriseFilter = (courses, requiredRange) => {

    let coursesFiltes = courses.filter((course) => {
   
        if (!requiredRange[0] && !requiredRange[1]) {
            return course
        }
        let param1=true;
        let param2=true;
        let param3=true;
        let param4=true;
        let rangemax = course.prices[1] ? course.prices[1]: Infinity
            if(Boolean(requiredRange[0]) && Boolean(requiredRange[1])){
            
                param1= course.prices[0] ? (((requiredRange[0] >= course.prices[0]) && (requiredRange[0] <  rangemax))||
                                        ( requiredRange[0]< course.prices[0] && (requiredRange[0] <  rangemax) )) : true

                param2= course.prices[1] ? requiredRange[0]<= course.prices[1] :true

                param3 = course.prices[1]  ? (((requiredRange[1]< course.prices[1]) && (requiredRange[1] > course.prices[0]))||
                                        ( requiredRange[1] >= course.prices[1] && (requiredRange[1] > course.prices[0]) )):true

                param4= course.prices[0] ? requiredRange[1] > course.prices[0] :true
        }
        if (!requiredRange[0]) {
            param1 = requiredRange[0] <= course.prices[0]
            param2 = course.prices[0] <= requiredRange[1]
            param3 = course.prices[0] < requiredRange[1]
            param4 = course.prices[1] >= requiredRange[0]
        }
        if (!requiredRange[1]) {
            param1 = course.prices[1] ? requiredRange[0] < course.prices[1] : true
        }
        return (param1 && param2 && param3 && param4) ? course : null
    });
    return coursesFiltes
}
console.log(requiredRange1,PriseFilter(courses, requiredRange1))
console.log(requiredRange2,PriseFilter(courses, requiredRange2))
console.log(requiredRange3,PriseFilter(courses, requiredRange3))