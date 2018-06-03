let cities = [];
let totalCities = 10;
let bestDistance;
let bestPath = cities.slice();

setup=()=>{
    createCanvas(400, 300);
    for(let i = 0; i < totalCities; i++){
        let v = createVector(random(width), random(height));
        cities[i] = v;
    }

    let d = calcDistance(cities);
    bestDistance = d;
}

draw=()=>{
    background(0);
    fill(255);
    noFill();
    for(let i = 0; i < cities.length; i++){
        ellipse(cities[i].x, cities[i].y,8,8);
    }
    //current path
    stroke(255);
    strokeWeight(3);
    beginShape();
    for(let i = 0; i < cities.length; i++){
        vertex(cities[i].x, cities[i].y);
    }
    endShape();

    //current bestPath
    stroke(0,255,0);
    strokeWeight(6);
    beginShape();
    for(let i = 0; i < bestPath.length; i++){
        vertex(bestPath[i].x, bestPath[i].y);
    }
    endShape();

    let x = floor(random(cities.length));
    let y = floor(random(cities.length));
    swap(cities, x, y);

    let d = calcDistance(cities);
    if(d < bestDistance){
        bestDistance = d;
        bestPath = cities.slice();
        console.log(bestPath);
    }
}

let swap =(arr, x, y)=>{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

let calcDistance=(points)=>{
    let sum = 0;
    for(let i = 0; i<points.length-1; i++){
       let d = dist(points[i].x, points[i].y, points[i+1].x, points[i+1].y); 
       sum += d;
    }
    return sum;
}