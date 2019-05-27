import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Prompt } from 'react-router';
import { FaUndo, FaSearch } from 'react-icons/fa';

import {
	fetchBrands,
	selectBrand,

	fetchModels,
	selectModel,

	fetchYears,
	selectYear,

	fetchValue,

	resetSearch,
	changeResult
} from '../actions';
import { apiToSelect, selected, isEmptyObject } from '../utils/helpers';

import Loading from '../components/Loading/Loading';
import CustomSelect from '../components/CustomSelect/CustomSelect';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button'
import Table from '../components/Table/Table';

import './Search.scss';

class Search extends Component {

	componentDidMount() {
		if(!this.props.brands.length) this.props.dispatch(fetchBrands());
	}

	handleBrand = selectedOption => {
		this.props.dispatch(selectBrand(selectedOption.value));
		this.props.dispatch(fetchModels(selectedOption.value));
	}

	handleModel = selectedOption => {
		const { selectedBrand } = this.props;

		this.props.dispatch(selectModel(selectedOption.value));
		this.props.dispatch(fetchYears(selectedBrand.value, selectedOption.value));
	}

	handleYear = selectedOption => {
		const { selectedBrand, selectedModel } = this.props;

		this.props.dispatch(selectYear(selectedOption.value));
		this.props.dispatch(fetchValue(selectedBrand.value, selectedModel.value, selectedOption.value));
	}

	search = e => {
		e.preventDefault();
		this.props.dispatch(changeResult(true));
	}

	reset = e => {
		e.preventDefault();
		this.props.dispatch(resetSearch());
	}

	render() {
		const {
			isLoading,

			brands,
			selectedBrand,

			models,
			selectedModel,

			years,
			selectedYear,

			value,

			showResult
		} = this.props;

		if(!brands.length && isLoading) return <Loading />

		const isBrandDisabled = selectedBrand && models.length > 0;
		const isModelDisabled = selectedModel && years.length > 0;
		const isYearDisabled = selectedYear && !isEmptyObject(value);

		return (
			<>
				<Prompt
					when={isBrandDisabled || false}
					message="Quer mesmo sair da busca?"
				/>
				<Header />

				<div className="search container">
					<h1>Encontre seu carro: </h1>

					<fieldset disabled={isBrandDisabled}>
						<legend>Marca</legend>

						<CustomSelect
							isLoading={isLoading}
							isDisabled={isBrandDisabled}
							value={selectedBrand}
							onChange={this.handleBrand}
							options={brands}
							placeholder="Escolha uma marca..."
						/>
					</fieldset>

					{isBrandDisabled && (
						<fieldset className={`my-4 ${!isModelDisabled && 'animated-enter animated-enter--from-up'}`} disabled={isModelDisabled}>
							<legend>Modelo</legend>

							<CustomSelect
								isLoading={isLoading}
								onChange={this.handleModel}
								isDisabled={isModelDisabled}
								options={models}
								placeholder="Escolha um modelo..."
							/>
						</fieldset>
					)}

					{isModelDisabled && (
						<fieldset className="my-4 animated-enter animated-enter--from-up" disabled={isYearDisabled}>
							<legend>Ano</legend>

							<CustomSelect
								isLoading={isLoading}
								onChange={this.handleYear}
								isDisabled={isYearDisabled}
								options={years}
								placeholder="Escolha um ano..."
							/>
						</fieldset>
					)}

					{isYearDisabled && (
						<>
							<div className="search__buttons">
								{!showResult && (
									<Button
										className="search__button search__button--submit"
										onClick={this.search}
									>
										<FaSearch /> &nbsp;
										Buscar
									</Button>
								)}

								<Button
									className="search__button search__button--reset"
									onClick={this.reset}
								>
									<FaUndo /> &nbsp;
									Reiniciar
								</Button>
							</div>
							{showResult && (
								<div className="search__result">
									<Table data={[value]} />
								</div>
							)}
						</>
					)}
				</div>
			</>
		);
	}
};

const mapStateToProps = state => {
	const { isLoading, showResult, cars: { brands, models, years, value } } = state;

	return {
		isLoading,
		value,
		showResult,

		brands: apiToSelect(brands),
		selectedBrand: apiToSelect(selected(brands)),

		models: apiToSelect(models),
		selectedModel: apiToSelect(selected(models)),

		years: apiToSelect(years),
		selectedYear: apiToSelect(selected(years))
	}
}

export default connect(mapStateToProps)(Search);
