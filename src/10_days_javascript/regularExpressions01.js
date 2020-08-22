function regexVar() {
    return /^a.+a$|^e.+e$|^i.+i$|^o.+o$|^u.+u$/;
}


console.log(regexVar().test("aca"));
console.log(regexVar().test("axxxe"));
console.log(regexVar().test("exxxxe"));
console.log(regexVar().test("aewxyzae"));