import {arrayContentEquality} from "../../../utils/arrayContentEquality";

export const checkConversationExists = (list1:any[], list2:any[]) => {
    return arrayContentEquality(list1, list2)
}