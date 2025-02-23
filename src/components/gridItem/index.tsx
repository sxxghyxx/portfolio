import { useInView } from "@/hooks/useInView"
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
	const { ref: ref1, inView: inView1 } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})
	const { ref: ref2, inView: inView2 } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})

	const { ref: ref3, inView: inView3 } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})
	return (
		<>
			<div className={styles.gridWrapper}>
				{first && (
					<div ref={ref1} style={inView1}>
						{first.title && (
							<div className={styles.firstText}>{first.title}</div>
						)}
						<DatePeriod date={first.date} />
					</div>
				)}
				{second && (
					<>
						{second.itemType === "text" && (
							<div
								className={styles.secondItemWrapper}
								ref={ref2}
								style={inView2}
							>
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
							<div
								className={styles.secondItemWrapper}
								ref={ref2}
								style={inView2}
							>
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
				<div ref={ref3} style={inView3}>
					<ul className={styles.threeWrapper}>
						{third.items.map((v) => (
							<li className={styles.threeItem} key={v}>
								{v}
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	)
}

interface ISubTitle {
	label: string
}

const Title = ({ label }: ISubTitle) => {
	const { ref: ref, inView: inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})
	return (
		<h4 ref={ref} style={inView} className={styles.gridTitleLabel}>
			{label}
		</h4>
	)
}
const DatePeriod = ({
	date,
}: {
	date: { endDate: string | null; startDate: string }
}) => {
	const { ref: ref, inView: inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})
	const EndDate = typeof date.endDate === "string" ? date.endDate : "~ing"
	return (
		<div className={styles.periodCSS} ref={ref} style={inView}>
			<span>{date.startDate}</span> - <span>{EndDate}</span>
		</div>
	)
}
