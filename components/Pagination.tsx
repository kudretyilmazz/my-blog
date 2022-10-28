// Import
import { useState, useEffect } from "react";

// Import Translation
import useTranslation from "next-translate/useTranslation";

// Interface
interface PaginationProps {
	totalPosts: number;
	postsPerPage: number;
	setCurrentPage: (pageNumber: number) => void;
	currentPage: number;
}
function Pagination(props: PaginationProps) {
	// Props Destruction
	const { totalPosts, postsPerPage, setCurrentPage, currentPage } = props;

	// useStates
	const [full, setFull] = useState<boolean>(false);

	// variables
	let pageNumbers = [];
	const { t } = useTranslation("common");

	// create page numbers
	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	// useEffect
	useEffect(() => {
		pageNumbers.length <= 6 && setFull(true);
	}, [pageNumbers.length]);
	return (
		<div>
			{totalPosts > 0 && (
				<ul className="flex items-center justify-center">
					<li
						key="previous"
						className={`mr-2 border-2  border-primary rounded-md px-3  cursor-pointer transition ${
							currentPage === 1 && "cursor-not-allowed text-gray-500 border-gray-500"
						}`}
						onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
					>
						<span> {t("PREVIOUS")} </span>
					</li>
					{full &&
						pageNumbers.map(number => {
							return (
								<li
									key={number}
									className={`mr-2 border-2  border-primary px-3  rounded-md cursor-pointer transition ${
										number == currentPage && "bg-secondary border-secondary"
									}`}
									onClick={() => {
										setCurrentPage(number);
									}}
								>
									<span className={`select-none ${number == currentPage && "text-white "}`}>
										{number}
									</span>
								</li>
							);
						})}
					{!full &&
						pageNumbers.slice(0, 3).map(number => {
							return (
								<li
									key={number}
									className="mr-2  px-3 bg-white rounded-sm cursor-pointer transition"
									onClick={() => {
										setCurrentPage(number);
									}}
								>
									<span className="select-none">{number}</span>
								</li>
							);
						})}
					{!full && (
						<span className="divider" onClick={() => setFull(true)}>
							...
						</span>
					)}
					{!full &&
						pageNumbers.length > 6 &&
						pageNumbers.slice(pageNumbers.length - 3, pageNumbers.length).map(number => {
							return (
								<li
									key={number}
									className="mr-2  px-3 bg-white rounded-sm cursor-pointer transition"
									onClick={() => {
										setCurrentPage(number);
									}}
								>
									<span className="select-none">{number}</span>
								</li>
							);
						})}
					<li
						key="next"
						className={`mr-2 border-2  border-primary rounded-md px-3  cursor-pointer transition ${
							currentPage === pageNumbers.length &&
							"cursor-not-allowed text-gray-500 border-gray-500"
						}`}
						onClick={() => currentPage !== pageNumbers.length && setCurrentPage(currentPage + 1)}
					>
						<span> {t("NEXT")} </span>
					</li>
				</ul>
			)}
		</div>
	);
}

export default Pagination;
