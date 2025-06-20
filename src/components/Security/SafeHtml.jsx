import React from "react";
import DOMPurify from "dompurify";

/**
 * Safely renders HTML by sanitizing user-generated content.
 *
 * @param {Object} props
 * @param {string} props.html - The raw HTML to sanitize
 */
const SafeHtml = ({ html }) => {
  const cleanHtml = DOMPurify.sanitize(html);

  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
};

export default SafeHtml;
