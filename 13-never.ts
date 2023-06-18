
type S = '唱' | '跳' | 'rap'|'篮球'
function kun (value:S) {
    switch(value){
        case "唱":
            break;
        case '跳':
            break;
        case 'rap':
            break;
        case '篮球':
            break;
        default:
            // 兜底逻辑
            const error:never = value;
            break;
    }
};