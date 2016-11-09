interface Read<T> {
    retrieve: (predicate: any, callback: (error: any, result: any)=> void)=> void;
    findById: (id: string, callback: (error: any, result: T) => void) => void;
}

export = Read;