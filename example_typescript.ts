interface UserData {
    name: string;
    age: number;
}

class User<T> {
    constructor(private data: T) {}

    getData(): T {
        return this.data;
    }
}
const u = new User<string>("bob");
const d = u.getData();
const sec = new User<number>(23);
const out = sec.getData();
const userDt: UserData = {
    name: "bob",
    age: 23
}
const userIn = new User<UserData>(userDt);
const res = userIn.getData();
res.name;


/*
interface UserData {
    name: string;
    age: number;
}

type RetTypes = string | number | boolean | UserData;

class User {
    constructor(private data: RetTypes) {}

    getData(): RetTypes {
        return this.data;
    }
}

const u = new User("bob");
const d: RetTypes = u.getData();

const sec = new User(23);
const out: RetTypes = sec.getData();
*/