import { action, Action, createStore, thunk, Thunk } from 'easy-peasy';
import { axiosCall } from '../utils/axiosCall';
import { NewsRequestUrl, API_KEY } from '../utils/backendRoutes';
import { handleError, validateData } from '../utils/errorhandler';
import { News } from '../constant/interface';

export interface GetNewsPaginationOptions {
  pageSize: number;
  page?: number;
  keyword?: string;
}

export interface NewsModel {
  news: News[];
  setNewsList: Action<NewsModel, News[]>;
  isGettingNews: Boolean;
  setIsGettingNews: Action<NewsModel, Boolean>;
  getNews: Thunk<NewsModel, GetNewsPaginationOptions>;
}

export const stores = createStore<NewsModel>({
  news: [],
  isGettingNews: false,
  setNewsList: action((state, payload) => {
    state.news = payload;
  }),
  setIsGettingNews: action((state, payload) => {
    state.isGettingNews = payload;
  }),
  getNews: thunk(async (actions, payload) => {
    const { pageSize, page, keyword } = payload;
    actions.setIsGettingNews(true);
    try {
      const result = await axiosCall({
        method: 'GET',
        url: `${NewsRequestUrl}`,
        params: {
          domains: 'wsj.com',
          apiKey: API_KEY,
          pageSize,
          page,
          q: keyword,
        },
      });
      actions.setIsGettingNews(false);
      actions.setNewsList(validateData(result).articles);
    } catch (error) {
      handleError(error);
    }
  }),
});
