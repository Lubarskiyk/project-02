import { fetchReviews } from './fetchReviews';
import { renderReviewsError, renderReviewsSuccess } from './renderReviews';
import { onError } from './notifications';

export async function getReviews() {
  try {
    const responseReviews = await fetchReviews();
    renderReviewsSuccess(responseReviews);
  } catch (error) {
    onError();
    renderReviewsError();
  }
}
