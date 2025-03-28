export function PortfolioCard({ title, description, image, tags, link }) {
  return (
      <div className="portfolio-card">
          <img 
              src={image} 
              alt={title}
              className="portfolio-image"
          />
          <div className="portfolio-content">
              <h3 className="portfolio-title">{title}</h3>
              <p className="portfolio-description">{description}</p>
              <div className="portfolio-tags">
                  {tags.map((tag, index) => (
                      <span key={index} className="portfolio-tag">
                          {tag}
                      </span>
                  ))}
              </div>
              <a href={link} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                  詳細を見る
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
              </a>
          </div>
      </div>
  );
}