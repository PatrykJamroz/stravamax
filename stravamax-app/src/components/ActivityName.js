import React from "react";
import styled from "styled-components";
import { ItemParagraphs, IconImg } from "./StyledComponents";

const ItemParagraphsTitle = styled(ItemParagraphs)`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5em;
`;

function ActivityName(props) {
  return (
    <ItemParagraphsTitle>
      <IconImg
        alt="svgImg"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSIjZmM0YzAyIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTc2LjIxNTgyLDEwLjc1bC00NC41MDEyMiw4NmgyNi4yMjQxMmwxOC4yNzcxLC0zNC4yOTcxMmwxOC4xNzIxMiwzNC4yOTcxMmgyNi4wMTQxNnpNMTIwLjQwMjEsOTYuNzVsLTEyLjkwMjEsMjUuNzQxMjFsLTEzLjExMjA2LC0yNS43NDEyMWgtMTkuODkzOGwzMy4wMDU4Niw2NC41bDMyLjc4NTQsLTY0LjV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
      />
      {props.activityName}
    </ItemParagraphsTitle>
  );
}

export default ActivityName;
