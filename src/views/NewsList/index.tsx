import { useState } from 'react';
import './NewsList.scss';
import { useEffect } from 'react';
import { useStoreActions, useStoreState } from '../../store/redux';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';

const NewsList = () => {
  const getNews = useStoreActions((actions) => actions.getNews);
  const news = useStoreState((state) => state.news);
  const isGettingNews = useStoreState((state) => state.isGettingNews);
  const [displayNews, setDisplayNews] = useState<any>();

  useEffect(() => {
    getNews({ pageSize: 10, page: 1 });
  }, []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString();
  };

  useEffect(() => {
    setDisplayNews(
      news.map((item, index) => ({
        id: index,
        author: item.author,
        content: item.content,
        description: item.description,
        publishedAt: formatDate(item.publishedAt),
        source: item.source.name,
        title: item.title,
        url: item.url,
        urlToImage: item.urlToImage,
      }))
    );
  }, [news]);

  return (
    <div className="newsList">
      <Header />
      <div style={{ width: '100%' }}>
        {displayNews && (
          <Table
            data={displayNews}
            onPaginationChange={(data) =>
              getNews({ pageSize: 10, page: data.page + 1 })
            }
            loading={isGettingNews}
          />
        )}
      </div>
    </div>
  );
};

export default NewsList;
