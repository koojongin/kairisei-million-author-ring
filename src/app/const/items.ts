export interface MAItem {
  name: string
  desc: string
  detail: string
  thumbnail: string
}

export const ITEMS_DICT: { [key: string]: MAItem } = {
  1: {
    thumbnail: '/img/items/origin-coin.webp',
    name: '오리진 코인',
    desc: '상점 상품 교환에 사용된다.',
    detail:
      '원질 에너지를 함유한 광석을 브리튼에서 가공한 화폐로, 순도가 낮아 일정량을 모아야만 특정 물자와 교환할 수 있다.',
  },
  2: {
    thumbnail: '/img/items/diamond.webp',
    name: '광휘의 결정',
    desc: '특수 화폐',
    detail: '여러 문명의 기록에서 등장하는 특별한 광물로, 그 특성은 고순도의 원질과 유사하다.',
  },
  3: {
    thumbnail: '/img/items/ultimate-chiary.webp',
    name: '궁극 치아리의 영상 기록',
    desc: '카드 경험치 10,000 제공',
    detail:
      '궁극 치아리 생활 영상 기록, 시청 시, 궁극 치아리가 바로 옆에 있는 것 같은 느낌을 준다.',
  },
  4: {
    thumbnail: '/img/items/power-injection-module-3.webp',
    name: '마력 주입 모듈 : 3단계',
    desc: '각 직업 아서 마력 주입 모듈 획득',
    detail: '신성한 결정체를 응용한 연구를 통해 얻어진 산물이다.',
  },
  5: {
    thumbnail: '/img/items/power-injection-module-2.webp',
    name: '마력 주입 모듈 : 2단계',
    desc: '각 직업 아서 마력 주입 모듈 획득',
    detail: '신성한 결정체를 응용한 연구를 통해 얻어진 산물이다.',
  },
  6: {
    thumbnail: '/img/items/technical-training-manual-3.webp',
    name: '기술 훈련 매뉴얼 : 3권',
    desc: '각 직업 아서 매뉴얼 획득',
    detail: '세 직업의 훈련 매뉴얼로, 아서가 지식의 힘을 더 깊게 이해할 수 있도록 도움을 준다.',
  },
  7: {
    thumbnail: '/img/items/technical-training-manual-2.webp',
    name: '기술 훈련 매뉴얼 : 2권',
    desc: '각 직업 아서 매뉴얼 획득',
    detail: '세 직업의 훈련 매뉴얼로, 아서가 지식의 힘을 더 깊게 이해할 수 있도록 도움을 준다.',
  },
  8: {
    thumbnail: '/img/items/found.webp',
    name: '파운드',
    desc: '기본 화폐',
    detail:
      '브리튼에서 사용되는 기본 화폐로, 아홉 세계에서도 현지 세력과의 거래 및 일상적인 업무에 폭넓게 활용된다.',
  },
  9: {
    thumbnail: '/img/items/origin-coin-rare.webp',
    name: '희귀 오리진 코인',
    desc: '상점 특수 상품 교환에 사용된다.',
    detail:
      '원질 에너지를 함유한 광석을 브리튼에서 가공해 불순물을 제거한 화폐로, 일정량을 모아야만 특정 물자와 교환할 수 있다.',
  },
  10: {
    thumbnail: '/img/items/power-injection-module-1.webp',
    name: '마력 주입 모듈 : 1단계',
    desc: '각 직업 아서 마력 주입 모듈 획득',
    detail: '신성한 결정체를 응용한 연구를 통해 얻어진 산물이다.',
  },
  11: {
    thumbnail: '/img/items/technical-training-manual-1.webp',
    name: '기술 훈련 매뉴얼 : 1권',
    desc: '각 직업 아서 매뉴얼 획득',
    detail: '세 직업의 훈련 매뉴얼로, 아서가 지식의 힘을 더 깊게 이해할 수 있도록 도움을 준다.',
  },
  12: {
    thumbnail: '/img/items/expert-chiary.webp',
    name: '특급 치아리의 영상 기록',
    desc: '카드 경험치 2,000 제공',
    detail:
      '특급 치아리 생활 영상 기록, 시청 시, 특급 치아리가 바로 옆에 있는 것 같은 느낌을 준다.',
  },
}
