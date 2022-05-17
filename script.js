
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
let requiredRange2 = [300, 550];
let requiredRange3 = [200, null];

const PriseFilter = (courses, requiredRange) => {

    let coursesFiltes = courses.filter((course) => {
        //Если фильтр не установлен
        if (!requiredRange[0] && !requiredRange[1]) {
            return course
        }
        //параметры для фильрации 
        let param1=true;
        let param2=true;
        let param3=true;
        let param4=true;
        // если максимальный диапазон не указан, приравнивавет к Infinity(к числу которое всегда больше)
        let rangemax = course.prices[1] ? course.prices[1]: Infinity

        //диапазон указан
        if(Boolean(requiredRange[0]) && Boolean(requiredRange[1])){
                // проверяет находится ли начальный диапазон в между лоу курсом и макс курсом или находится ли начальный диапазон ниже курса 
                param1= course.prices[0] ? (((requiredRange[0] >= course.prices[0]) && (requiredRange[0] <  rangemax))||
                                        ( requiredRange[0]< course.prices[0] )) : true
                // проверяет на то что начаный диапазон ниже максимальной цены
                 param2= course.prices[1] ? requiredRange[0]<= course.prices[1] :true
                // проверяет находится ли конечный диапазон в между лоу курсом и макс курсом или находится ли конечный диапазон выше курса 
                param3 = course.prices[1]  ? (((requiredRange[1]< course.prices[1]) && (requiredRange[1] > course.prices[0]))||
                                        ( requiredRange[1] >= course.prices[1] )):true
                // проверяет на то что конечный диапазон выше манимальной цены
                param4= course.prices[0] ? requiredRange[1] > course.prices[0] :true
        }
        //диапазон до какого-то числа 
        if (!requiredRange[0]) {
            //проверяет находится ли коненчый диапазон выше начальный цены
            param1 =  requiredRange[1] > course.prices[0] 
        }
        //диапазон от какого-то числа 
        if (!requiredRange[1]) {
            //сравнивает начальный диапазон и конечной ценой
            param1 = course.prices[1] ? requiredRange[0] < course.prices[1] : true
        }
        return (param1 && param2 && param3 && param4) ? course : null
    });
    return coursesFiltes
}
console.log(requiredRange1,PriseFilter(courses, requiredRange1))
console.log(requiredRange2,PriseFilter(courses, requiredRange2))
console.log(requiredRange3,PriseFilter(courses, requiredRange3))