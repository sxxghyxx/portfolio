import styles from "./gird-item.css"
interface IGridItemBox {
	keyLabel: string
	data: IItem | IItem[]
	backGround?: "white" | "primary"
}

export const GridItemBox = ({
	data,
	keyLabel,
	backGround = "white",
}: Partial<IGridItemBox>) => {
	return (
		<div className={styles.gridItemBox({ backGround })}>
			<Title label={keyLabel as string} />

			{Array.isArray(data) ? (
				data.map((v) => (
					<div className={styles.secondItemFlex}>
						<Item {...v} />
					</div>
				))
			) : (
				<Item {...(data as IItem)} />
			)}
		</div>
	)
}

interface IItem {
	first: {
		title?: string
		date: { startDate: string; endDate: string | null }
	}
	second: {
		items: Record<string, string | string[]>
		itemType: "text" | "label"
	}
	third: {
		items: string[]
	}
}
const Item = ({ first, second, third }: IItem) => {
	return (
		<>
			<div className={styles.gridWrapper}>
				{first && (
					<div>
						{first.title && (
							<div className={styles.firstText}>{first.title}</div>
						)}
						<DatePeriod date={first.date} />
					</div>
				)}
				{second && (
					<>
						{second.itemType === "text" && (
							<div className={styles.secondItemWrapper}>
								{Object.entries(second.items).map(([key, value]) => (
									<div
										key={key}
										className={styles.secondItemContainer({
											itemType: second.itemType,
										})}
									>
										<div className={styles.secondItemKey}>{key}</div>
										<div className={styles.secondItemValue}>{value}</div>
									</div>
								))}
							</div>
						)}
						{second.itemType === "label" && (
							<div className={styles.secondItemWrapper}>
								{Object.entries(second.items).map(([key, value]) => (
									<div
										key={key}
										className={styles.secondItemContainer({
											itemType: second.itemType,
										})}
									>
										<div className={styles.secondItemKey}>{key}</div>
										<div className={styles.secondItemValueWrapper}>
											{(value as string[]).map((v) => (
												<div className={styles.secondItemValueBox} key={v}>
													{v}
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						)}
					</>
				)}
			</div>
			{third && (
				<>
					<ul className={styles.threeWrapper}>
						{third.items.map((v) => (
							<li className={styles.threeItem} key={v}>
								{v}
							</li>
						))}
					</ul>
				</>
			)}
		</>
	)
}

interface ISubTitle {
	label: string
}

const Title = ({ label }: ISubTitle) => {
	return <h4 className={styles.gridTitleLabel}>{label}</h4>
}
const DatePeriod = ({
	date,
}: {
	date: { endDate: string | null; startDate: string }
}) => {
	const EndDate = typeof date.endDate === "string" ? date.endDate : "~ing"
	console.log(EndDate)
	return (
		<div className={styles.periodCSS}>
			<span>{date.startDate}</span> - <span>{EndDate}</span>
		</div>
	)
}
