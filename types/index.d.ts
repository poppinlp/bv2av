interface BVInfo {
    title: string;
    desc: string;
    cover: string;
    bvID: string;
    avID: string;
    avUrl: string;
    bvUrl: string;
}
export declare function getBvInfo(bv: string): Promise<BVInfo>;
export declare function bv2av(bv: string): Promise<string>;
export {};
