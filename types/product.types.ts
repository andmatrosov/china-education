interface Product {
    arrival_season: string;
    arrival_year: number;
    charges: string[];
    city: string;
    cover_image: string;
    deadline: boolean;
    double_room_fee: string;
    education: string;
    en_name: string;
    end_at: string;
    id: number;
    introduction: "";
    is_collection: boolean;
    is_hot: number;
    is_pre_sale: number;
    is_promote: number;
    is_self: number;
    issp: number;
    istudy_china_cover_image: string;
    labels: string[];
    language: string;
    product_sn: string;
    province: string;
    room_fee: string;
    sc_cover_image: string;
    sc_labels: string[];
    scg_cover_image: string;
    scg_labels: string[];
    scholarship_room_fee: string;
    scholarship_str: string;
    scholarship_type: string;
    school_name: string;
    self_tuition_fee: string;
    self_tuition_fee_unit: string;
    single_room_fee: string;
    subject: string;
    surplus: number;
    triple_room_fee: string;
    tuition_fee: string;
    tuition_fee_unit: string;
    tuition_last_fee: string;
    tuition_last_fee_unit: string;
    urlname: string
}

export type { Product };