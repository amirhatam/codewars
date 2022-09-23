const match = (candidate, job) => {
    const cMin = candidate.minSalary
    const jMax = job.maxSalary
    if (!cMin || !jMax)
        throw "Error!!";


    return (cMin * 0.9) <= jMax;
}

console.log(match({ minSalary: 190000 }, { maxSalary: 171000 }));