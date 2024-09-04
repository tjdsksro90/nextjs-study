import ModalBackDrop from '@/components/modal-backdrop';
import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';

const InterceptedImagePage = async ({ params }) => {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackDrop>
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </div>
        </dialog>
      </ModalBackDrop>
    </>
  );
};

export default InterceptedImagePage;
