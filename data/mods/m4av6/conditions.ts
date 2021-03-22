export const Conditions: {[k: string]: ConditionData} = {
	acidicterrain: {
		name: 'Acidic Terrain',
		effectType: 'Terrain',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('terrainextender')) {
				return 8;
			}
			return 5;
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Poison' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
				for (const active of this.getAllActive()) {
					if (active.hasAbility('downtoearth')) {
						this.add('-message', `${active.name} suppresses the effects of the terrain!`);
						return;
					}
				}
				this.debug('acidic terrain boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		onModifyMovePriority: -5,
		onModifyMove(move, source, target) {
			if (move.type === 'Poison' && target.isGrounded() && !target.isSemiInvulnerable() && target.hasType('Steel')) {
				for (const target of this.getAllActive()) {
					if (target.hasAbility('downtoearth')) {
						this.add('-message', `${target.name} suppresses the effects of the terrain!`);
						return;
					}
				}
				if (!move.ignoreImmunity) move.ignoreImmunity = {};
				if (move.ignoreImmunity !== true) {
					move.ignoreImmunity['Poison'] = true;
				}
			}
		},
		onStart(battle, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-fieldstart', 'move: Acidic Terrain', '[from] ability: ' + effect, '[of] ' + source);
				this.add('-message', "Poison-type moves used by grounded Pokémon will have their power increased.");
				this.add('-message', "Grounded Steel-type Pokémon will also lose their immunity to Poison-type moves.");
			} else {
				this.add('-fieldstart', 'move: Acidic Terrain');
			}
		},
		onResidualOrder: 21,
		onResidualSubOrder: 2,
		onEnd() {
			this.add('-fieldend', 'move: Acidic Terrain');
		},
 	},
	desertgales: {
		name: 'Desert Gales',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('smoothrock')) {
				return 8;
			}
			return 5;
		},
		onStart(battle, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectData.duration = 0;
				this.add('-ability', source, 'Desert Gales');
				this.add('-weather', 'Desert Gales', '[silent]');
				this.add('-message', `Desert gales kicked up!`);
				this.add('-message', "Normal-type moves will become Ground-type.");
				this.add('-message', "Rock-, Ground- and Steel-type moves will also have their power increased.");
				this.add('-message', "Other weather-related moves and Abilities will behave as they do in sandstorm.");
			} else {
				this.add('-weather', 'Desert Gales', '[silent]');
			}
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Ground';
				this.add('-message', `${move.name} became ${move.type}-type in the desert gales!`);
			}
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (move.type === 'Rock' || move.type === 'Ground' || move.type === 'Steel') {
				this.debug('Desert Gales boost');
				this.add('-message', `${move.name} was powered up by the desert gales!`);
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onResidual() {
			this.add('-weather', 'Desert Gales', '[upkeep]');
			this.add('-message', `The desert gales are raging!`);
		},
		onEnd() {
			this.add('-weather', 'none', '[silent]');
			this.add('-message', `The desert gales subsided!`);
		},
	},
	diamonddust: {
		name: 'Diamond Dust',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('icyrock')) {
				return 8;
			}
			return 5;
		},
		onStart(battle, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectData.duration = 0;
				this.add('-ability', source, 'Diamond Dust');
				this.add('-weather', 'Diamond Dust', '[silent]');
				this.add('-message', `A cloud of diamond dust blew in!`);
				this.add('-message', "All Rock-type damage, including Stealth Rock, will be nullified.");
				this.add('-message', "Other weather-related moves and Abilities will behave as they do in hail.");
			} else {
				this.add('-weather', 'Diamond Dust', '[silent]');
			}
		},
		onDamage(damage, target, source, effect) {
			if (effect && effect.id === 'stealthrock') {
				this.add('-message', `${target.name} was protected from Stealth Rock by the diamond dust!`);
				return false;
			}
		},
		onTryHit(target, source, move) {
			if (move.type === 'Rock') {
				this.add('-message', `${target.name} was protected from ${move.name} by the diamond dust!`);
				this.add('-immune', target);
				return null;
			}
		},
		onResidual() {
			this.add('-weather', 'Diamond Dust', '[upkeep]');
			this.add('-message', `The air is sparkling with diamond dust!`);
		},
		onEnd() {
			this.add('-weather', 'none', '[silent]');
			this.add('-message', `The cloud of diamond dust blew away!`);
		},
	},
	settle1: {
		name: 'settle1',
		duration: 4,
		onResidualOrder: 1,
		onResidual(pokemon) {
			if (this.effectData.duration !== 3) return;
			let num = 0;
			for (const moveSlot of this.effectData.target.moveSlots) {
				num++;
				if (num === 1) {
					const move = this.dex.getMove(moveSlot.move);
					this.add('-message', `${pokemon.name} needs to settle down after using ${move.name}!`);
				}
			}
		},
		onEnd(pokemon) {
			let num = 0;
			for (const moveSlot of this.effectData.target.moveSlots) {
				num++;
				if (num === 1) {
					const move = this.dex.getMove(moveSlot.move);
					this.add('-message', `${pokemon.name} settled down from using ${move.name}!`);
				}
			}
		},
	},
	settle2: {
		name: 'settle2',
		duration: 4,
		onResidualOrder: 1,
		onResidual(pokemon) {
			if (this.effectData.duration !== 3) return;
			let num = 0;
			for (const moveSlot of this.effectData.target.moveSlots) {
				num++;
				if (num === 2) {
					const move = this.dex.getMove(moveSlot.move);
					this.add('-message', `${pokemon.name} needs to settle down after using ${move.name}!`);
				}
			}
		},
		onEnd(pokemon) {
			let num = 0;
			for (const moveSlot of this.effectData.target.moveSlots) {
				num++;
				if (num === 2) {
					const move = this.dex.getMove(moveSlot.move);
					this.add('-message', `${pokemon.name} settled down from using ${move.name}!`);
				}
			}
		},
	},
	settle3: {
		name: 'settle3',
		duration: 4,
		onResidualOrder: 1,
		onResidual(pokemon) {
			if (this.effectData.duration !== 3) return;
			let num = 0;
			for (const moveSlot of this.effectData.target.moveSlots) {
				num++;
				if (num === 3) {
					const move = this.dex.getMove(moveSlot.move);
					this.add('-message', `${pokemon.name} needs to settle down after using ${move.name}!`);
				}
			}
		},
		onEnd(pokemon) {
			let num = 0;
			for (const moveSlot of this.effectData.target.moveSlots) {
				num++;
				if (num === 3) {
					const move = this.dex.getMove(moveSlot.move);
					this.add('-message', `${pokemon.name} settled down from using ${move.name}!`);
				}
			}
		},
	},
	settle4: {
		name: 'settle4',
		duration: 4,
		onResidualOrder: 1,
		onResidual(pokemon) {
			if (this.effectData.duration !== 3) return;
			let num = 0;
			for (const moveSlot of this.effectData.target.moveSlots) {
				num++;
				if (num === 4) {
					const move = this.dex.getMove(moveSlot.move);
					this.add('-message', `${pokemon.name} needs to settle down after using ${move.name}!`);
				}
			}
		},
		onEnd(pokemon) {
			let num = 0;
			for (const moveSlot of this.effectData.target.moveSlots) {
				num++;
				if (num === 4) {
					const move = this.dex.getMove(moveSlot.move);
					this.add('-message', `${pokemon.name} settled down from using ${move.name}!`);
				}
			}
		},
	},
	longwhip1: {
		// this is a slot condition
		name: 'longwhip1',
		onResidualOrder: 3,
		onResidual(target) {
			// unlike a future move, Long Whip activates each turn
			const data = this.effectData;
			const move = this.dex.getMove(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(data.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			this.add(`${data.target.name} took the ${move.name} attack!`);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			if (data.move.name === 'Triple Axel' || data.move.name === 'Triple Kick') {
				data.move.basePower = 20 * (3 - data.duration);
				console.log(data.move.basePower);
			}
			data.moveData.isFutureMove = true;
			data.move.multihit = null;

			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;
			this.add('-anim', data.source, hitMove, target);
			this.trySpreadMoveHit([target], data.source, hitMove);
		},
		onEnd(target) {
			// unlike a future move, Long Whip activates each turn
			const data = this.effectData;
			const move = this.dex.getMove(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(data.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			this.add(`${data.target.name} took the ${move.name} attack!`);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			if (data.move.name === 'Triple Axel' || data.move.name === 'Triple Kick') {
				data.move.basePower = 20 * (3 - data.duration);
				console.log(data.move.basePower);
			}
			data.moveData.isFutureMove = true;
			data.move.multihit = null;

			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;
			this.add('-anim', data.source, hitMove, target);
			this.trySpreadMoveHit([target], data.source, hitMove);
		},
	},
	longwhip2: {
		// this is a slot condition
		name: 'longwhip2',
		onResidualOrder: 3,
		onResidual(target) {
			// unlike a future move, Long Whip activates each turn
			const data = this.effectData;
			const move = this.dex.getMove(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(data.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			this.add(`${data.target.name} took the ${move.name} attack!`);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			if (data.move.name === 'Triple Axel' || data.move.name === 'Triple Kick') {
				data.move.basePower = 20 * (3 - data.duration);
				console.log(data.move.basePower);
			}
			data.moveData.isFutureMove = true;
			data.move.multihit = null;

			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;
			this.add('-anim', data.source, hitMove, target);
			this.trySpreadMoveHit([target], data.source, hitMove);
		},
		onEnd(target) {
			// unlike a future move, Long Whip activates each turn
			const data = this.effectData;
			const move = this.dex.getMove(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(data.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			this.add(`${data.target.name} took the ${move.name} attack!`);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			if (data.move.name === 'Triple Axel' || data.move.name === 'Triple Kick') {
				data.move.basePower = 20 * (3 - data.duration);
				console.log(data.move.basePower);
			}
			data.moveData.isFutureMove = true;
			data.move.multihit = null;

			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;
			this.add('-anim', data.source, hitMove, target);
			this.trySpreadMoveHit([target], data.source, hitMove);
		},
	},
	longwhip3: {
		// this is a slot condition
		name: 'longwhip3',
		onResidualOrder: 3,
		onResidual(target) {
			// unlike a future move, Long Whip activates each turn
			const data = this.effectData;
			const move = this.dex.getMove(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(data.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			this.add(`${data.target.name} took the ${move.name} attack!`);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			if (data.move.name === 'Triple Axel' || data.move.name === 'Triple Kick') {
				data.move.basePower = 20 * (3 - data.duration);
				console.log(data.move.basePower);
			}
			data.moveData.isFutureMove = true;
			data.move.multihit = null;

			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;
			this.add('-anim', data.source, hitMove, target);
			this.trySpreadMoveHit([target], data.source, hitMove);
		},
		onEnd(target) {
			// unlike a future move, Long Whip activates each turn
			const data = this.effectData;
			const move = this.dex.getMove(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(data.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			this.add(`${data.target.name} took the ${move.name} attack!`);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			if (data.move.name === 'Triple Axel' || data.move.name === 'Triple Kick') {
				data.move.basePower = 20 * (3 - data.duration);
				console.log(data.move.basePower);
			}
			data.moveData.isFutureMove = true;
			data.move.multihit = null;

			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;
			this.add('-anim', data.source, hitMove, target);
			this.trySpreadMoveHit([target], data.source, hitMove);
		},
	},
	longwhip4: {
		// this is a slot condition
		name: 'longwhip4',
		onResidualOrder: 3,
		onResidual(target) {
			// unlike a future move, Long Whip activates each turn
			const data = this.effectData;
			const move = this.dex.getMove(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(data.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			this.add(`${data.target.name} took the ${move.name} attack!`);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			if (data.move.name === 'Triple Axel' || data.move.name === 'Triple Kick') {
				data.move.basePower = 20 * (3 - data.duration);
				console.log(data.move.basePower);
			}
			data.moveData.isFutureMove = true;
			data.move.multihit = null;

			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;
			this.add('-anim', data.source, hitMove, target);
			this.trySpreadMoveHit([target], data.source, hitMove);
		},
		onEnd(target) {
			// unlike a future move, Long Whip activates each turn
			const data = this.effectData;
			const move = this.dex.getMove(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(data.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			this.add(`${data.target.name} took the ${move.name} attack!`);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			if (data.move.name === 'Triple Axel' || data.move.name === 'Triple Kick') {
				data.move.basePower = 20 * (3 - data.duration);
				console.log(data.move.basePower);
			}
			data.moveData.isFutureMove = true;
			data.move.multihit = null;

			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;
			this.add('-anim', data.source, hitMove, target);
			this.trySpreadMoveHit([target], data.source, hitMove);
		},
	},
	longwhip5: {
		// this is a slot condition
		name: 'longwhip5',
		onResidualOrder: 3,
		onResidual(target) {
			// unlike a future move, Long Whip activates each turn
			const data = this.effectData;
			const move = this.dex.getMove(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(data.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			this.add(`${data.target.name} took the ${move.name} attack!`);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			if (data.move.name === 'Triple Axel' || data.move.name === 'Triple Kick') {
				data.move.basePower = 20 * (3 - data.duration);
				console.log(data.move.basePower);
			}
			data.moveData.isFutureMove = true;
			data.move.multihit = null;

			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;
			this.add('-anim', data.source, hitMove, target);
			this.trySpreadMoveHit([target], data.source, hitMove);
		},
		onEnd(target) {
			// unlike a future move, Long Whip activates each turn
			const data = this.effectData;
			const move = this.dex.getMove(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(data.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			this.add(`${data.target.name} took the ${move.name} attack!`);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			if (data.move.name === 'Triple Axel' || data.move.name === 'Triple Kick') {
				data.move.basePower = 20 * (3 - data.duration);
				console.log(data.move.basePower);
			}
			data.moveData.isFutureMove = true;
			data.move.multihit = null;

			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;
			this.add('-anim', data.source, hitMove, target);
			this.trySpreadMoveHit([target], data.source, hitMove);
		},
	},
};
