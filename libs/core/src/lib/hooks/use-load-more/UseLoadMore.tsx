import _ from 'lodash';
import React from 'react';

function useLoadMore<T>(data: Array<T>, loadLimit: number, deps?: unknown[]) {
  const [visibleData, setVisibleData] = React.useState<T[]>([]);
  const [fullData, setFullData] = React.useState<T[][]>([]);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [fullyLoaded, setFullyLoaded] = React.useState<boolean>(false);

  const fulllDataChunked = React.useMemo(() => {
    return _.chunk(_.cloneDeep(data), loadLimit);
  }, [data, loadLimit]);

  const fullDataFlatLength = React.useMemo(() => {
    return _.flattenDeep(fullData).length;
  }, [fullData]);

  const loadMoreData = React.useCallback(() => {
    if (fullDataFlatLength !== visibleData.length) {
      setVisibleData((prevState) =>
        _.concat(prevState, ...fullData[activeIndex + 1])
      );
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else {
      setFullyLoaded(true);
      _.noop();
    }
  }, [activeIndex, fullData, fullDataFlatLength, visibleData.length]);

  React.useEffect(() => {
    if (fullData.length <= 0 && fulllDataChunked.length) {
      setFullData(fulllDataChunked);
    }

    if (visibleData.length <= 0 && fulllDataChunked.length) {
      setVisibleData(fulllDataChunked[0]);
    }
  }, [fulllDataChunked, visibleData.length, fullData.length]);

  return {
    visible: visibleData,
    fullData: fullData,
    loadMore: loadMoreData,
    fullyLoaded: fullyLoaded,
  };
}

export default useLoadMore;
