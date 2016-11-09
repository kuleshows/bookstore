interface Read<T> {
    retrieve: (predicate: any, callback: (error: any, result: T)=> void)=> void;
    findById: (_id: string, callback: (error: any, result: T) => void) => void;
}

export = Read;