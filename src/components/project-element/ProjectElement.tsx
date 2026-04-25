import { ProjectStructure } from "@/types/types";
import React from "react";
import style from "./style.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
	structure: ProjectStructure;
};

export default function ProjectElement({ structure }: Props) {
	return (
		<div className={style.container}>
			{structure.elements.map((element, index) => {
				switch (element.type) {
					case "image":
						return (
							<img
								src={element.content}
								alt={element.alt!}
								key={index}
								className={style.image}
							/>
						);
					case "text":
						return (
							<p key={index} className={style.text}>
								{element.content}
							</p>
						);
					case "title":
						return (
							<h2 key={index} className={style.title}>
								{element.content}
							</h2>
						);
					case "link":
						return (
							<a href={element.url} className={style.link} aria-label={element.alt}>
								{element.content}
							</a>
						);
					case "code":
						return (
							<div key={index} className={style.codeContainer}>
								<SyntaxHighlighter
									language={element.language || "javascript"}
									style={vscDarkPlus}
									customStyle={{ margin: 0 }}
								>
									{element.content}
								</SyntaxHighlighter>
							</div>
						);
					default:
						return null;
				}
			})}
		</div>
	);
};